class Api::StatsController < ApplicationController
  def by_state
    render json: Startup.group(:state).count
  end

  def by_tech_tags
    stats = Tag.joins(:startups)
               .where(tag_type: "Технологии")
               .select('COUNT(DISTINCT startups.id) as startup_count', 'tags.name', 'tags.id')
               .group('tags.id', 'tags.name')

    render json: stats
  end

  def by_sphere_tags
    stats = Tag.joins(:startups)
               .where(tag_type: "Сферы применения")
               .select('COUNT(DISTINCT startups.id) as startup_count', 'tags.name', 'tags.id')
               .group('tags.id', 'tags.name')

    render json: stats
  end

  def by_segment
    render json: Startup.group(:business_segment).count
  end

  def by_organization
    render json: Startup.group(:organization_transport).count
  end

  def by_people_count
    render json: Startup.group(:people_count).count
  end
end