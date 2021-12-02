class Api::PilotsController < ApplicationController
  def index
    pilots = Pilot.all

    render json: pilots, each_serializer: PilotSerializer
  end

  def show
    pilot = Pilot.find(params[:id])

    render json: pilot, serializer: PilotSerializer
  end

  def create
    pilot = Pilot.new(pilot_params)

    if pilot.save
      render json: pilot, serializer: PilotSerializer
    else
      render json: pilot.errors
    end
  end

  def update
    pilot = Pilot.find(params[:id])

    if pilot.update(pilot_params)
      render json: pilot, serializer: PilotSerializer
    else
      render json: pilot.errors
    end
  end

  def destroy
    pilot = Pilot.find(params[:id])
    pilot.destroy

    render json: { status: :ok }
  end

  private

  def pilot_params
    params.require(:pilot).permit(:name, :project_team, :subordinate_org, :telegram_url, :initiation_date)
  end
end