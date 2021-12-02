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

ActiveRecord::Schema.define(version: 2021_12_02_215223) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "comments", force: :cascade do |t|
    t.string "source_type"
    t.bigint "source_id"
    t.text "description"
    t.string "author"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["source_type", "source_id"], name: "index_comments_on_source"
  end

  create_table "pilot_tags", force: :cascade do |t|
    t.bigint "pilot_id", null: false
    t.bigint "tag_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["pilot_id"], name: "index_pilot_tags_on_pilot_id"
    t.index ["tag_id"], name: "index_pilot_tags_on_tag_id"
  end

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
    t.string "telegram_url"
    t.index ["startup_id"], name: "index_pilots_on_startup_id"
  end

  create_table "startup_tags", force: :cascade do |t|
    t.bigint "startup_id", null: false
    t.bigint "tag_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["startup_id"], name: "index_startup_tags_on_startup_id"
    t.index ["tag_id"], name: "index_startup_tags_on_tag_id"
  end

  create_table "startups", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.string "state"
    t.string "contact_name"
    t.string "phone_number"
    t.string "email"
    t.string "direction"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "legal_entity_title"
    t.string "contact_rank"
    t.string "inn"
    t.integer "people_count"
    t.string "site_url"
    t.string "telegram_url"
    t.string "presentation_url"
    t.string "organization_transport"
    t.string "business_segment"
    t.string "readiness"
  end

  create_table "tags", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "pilot_tags", "pilots"
  add_foreign_key "pilot_tags", "tags"
  add_foreign_key "startup_tags", "startups"
  add_foreign_key "startup_tags", "tags"
end
