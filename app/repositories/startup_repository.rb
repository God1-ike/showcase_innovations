module StartupRepository
  extend ActiveSupport::Concern

  included do
    scope :by_tags, (lambda do |tags|
      return if tags.blank?

      joins(:tags).where('tags.name': tags)
                  .order('tag_count': :desc)
                  .group('startups.id')
                  .select('COUNT(DISTINCT tags.id) as tag_count', 'startups.*')
    end)
  end
end