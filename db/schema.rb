# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_12_02_135434) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "pilots", force: :cascade do |t|
    t.bigint "startup_id"
    t.string "name"
    t.string "project_team"
    t.date "initiation_date"
    t.string "state"
    t.string "testing_phase"
    t.string "subordinate_org"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["startup_id"], name: "index_pilots_on_startup_id"
  end

  create_table "startups", force: :cascade do |t|
    t.string "title", null: false
    t.text "description", null: false
    t.string "state", null: false
    t.string "contact_name"
    t.string "phone_number", null: false
    t.string "email"
    t.string "direction"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "legal_entity_title"
    t.string "contact_rank"
    t.string "inn"
    t.integer "people_count"
    t.string "site_url"
  end

end
