class Api::TagsController < ApplicationController
  def index
    tags = Tag.limit(params: params[:limit])

    render json: tags, each_serializer: TagSerializer
  end
end
