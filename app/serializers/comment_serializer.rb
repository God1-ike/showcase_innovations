class CommentSerializer < ActiveModel::Serializer
  attributes :description, :description, :source_type, :author
  belongs_to :source
  
  class << self
    def serializer_for(model, options)
      return StartupSerializer if model.class == Startup
      return PilotSerializer if model.class == Pilot

      super
    end
  end
end