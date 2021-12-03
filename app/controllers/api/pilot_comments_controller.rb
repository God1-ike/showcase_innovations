class Api::PilotCommentsController < ApplicationController
  def index
    pilot = Pilot.find(params[:pilot_id])

    render json: pilot.comments, each_serializer: CommentSerializer
  end

  def create
    comment = Comment.new(comment_params.merge(source_type: 'Pilot', author: user_full_name))

    if comment.save
      render json: comment, serializer: CommentSerializer
    else
      render json: comment.errors
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:description, :source_id)
  end
end