class Api::TagsController < ApplicationController
  def index
    tags = Tag.limit(params[:limit])

    render json: tags, each_serializer: TagSerializer
  end
end
