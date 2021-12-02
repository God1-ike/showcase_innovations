class Api::StartupsController < ApplicationController
  def index
    startups = Startup.all

    render json: startups
  end

  def show
    startup = Startup.find(params[:id])

    render json: startup
  end

  def create
    startup = Startup.new(startup_params)

    if startup.save
      render json: startup
    else
      render json: startup.errors
    end
  end

  def update
    startup = Startup.find(params[:id])

    if startup.update(startup_params)
      render json: startup
    else
      render json: startup.errors
    end
  end

  def destroy
    startup = Startup.find(params[:id])

    startup.destroy

    render json: { status: :ok }
  end

  private

  def startup_params
    params.require(:startup).permit(:title, :description, :contact_name, :phone_number, :email, :direction)
  end
end
