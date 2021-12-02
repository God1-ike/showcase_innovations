class Api::StatsController < ApplicationController
  def by_state
    render json: Startup.group(:state).count
  end

  def by_tags
    stats = Tag.joins(:startups)
               .select('COUNT(DISTINCT startups.id) as startup_count', 'tags.name', 'tags.id')
               .group('tags.id', 'tags.name')

    render json: stats
  end
end