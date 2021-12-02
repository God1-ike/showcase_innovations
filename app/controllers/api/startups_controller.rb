class Api::StartupsController < ApplicationController
  def index
    startups = Startup.all
    tags, state, people_count, organization_transport, business_segment, readiness = params.to_h.values_at(
      :tags, :state, :people_count, :organization_transport, :business_segment, :readiness
    )
    startups = startups.by_tags(tags) if tags.present?
    startups = startups.where(state: state) if state.present?
    startups = startups.where("people_count >= ?", people_count) if people_count.present?
    startups = startups.where(organization_transport: organization_transport) if organization_transport.present?
    startups = startups.where(business_segment: business_segment) if business_segment.present?
    startups = startups.where(readiness: readiness) if readiness.present?

    render json: startups, each_serializer: StartupSerializer
  end

  def show
    startup = Startup.find(params[:id])

    render json: startup, serializer: StartupSerializer
  end

  def create
    startup = Startup.new(startup_params)

    if startup.save
      render json: startup, serializer: StartupSerializer
    else
      render json: startup.errors
    end
  end

  def update
    startup = Startup.find(params[:id])

    if startup.update(startup_params)
      render json: startup, serializer: StartupSerializer
    else
      render json: startup.errors
    end
  end

  def destroy
    startup = Startup.find(params[:id])

    startup.destroy

    render json: { status: :ok }
  end

  def change_state
    startup = Startup.find(params[:id])

    if startup.aasm(:state).fire!(params[:state].to_sym)
      render json: { status: :ok }
    else
      render json: startup.errors
    end
  end

  private

  def startup_params
    params.require(:startup).permit(:title, :description, :contact_name, :phone_number, :email, :direction, :presentation,
                                    :legal_entity_title, :contact_rank, :inn, :people_count, :site_url,
                                    :telegram_url, :presentation_url, :organization_transport, :business_segment)
  end
end
