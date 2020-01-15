# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_01_14_024800) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accounts", force: :cascade do |t|
    t.boolean "email_pass", default: false
    t.boolean "facebook", default: false
    t.boolean "twitter", default: false
    t.boolean "google", default: false
    t.boolean "linkedin", default: false
    t.boolean "github", default: false
    t.boolean "invitation", default: false
    t.boolean "multi_account", default: false
    t.boolean "subdomain", default: false
    t.boolean "custom", default: false
    t.bigint "project_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["project_id"], name: "index_accounts_on_project_id"
  end

  create_table "analytics", force: :cascade do |t|
    t.boolean "cms"
    t.boolean "admin"
    t.boolean "moderation"
    t.boolean "intercom"
    t.boolean "usage"
    t.boolean "crash_report"
    t.boolean "performance"
    t.boolean "multilingual"
    t.bigint "project_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["project_id"], name: "index_analytics_on_project_id"
  end

  create_table "apps", force: :cascade do |t|
    t.string "ui_level"
    t.string "size"
    t.bigint "project_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["project_id"], name: "index_apps_on_project_id"
  end

  create_table "billings", force: :cascade do |t|
    t.boolean "subscription_plan", default: false
    t.boolean "payment_processing", default: false
    t.boolean "shopping_cart", default: false
    t.boolean "user_marketplace", default: false
    t.boolean "product_managment", default: false
    t.bigint "project_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["project_id"], name: "index_billings_on_project_id"
  end

  create_table "date_locations", force: :cascade do |t|
    t.boolean "calendar", default: false
    t.boolean "display", default: false
    t.boolean "map_display", default: false
    t.boolean "booking", default: false
    t.bigint "project_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["project_id"], name: "index_date_locations_on_project_id"
  end

  create_table "integrations", force: :cascade do |t|
    t.boolean "third_party", default: false
    t.boolean "messaging", default: false
    t.boolean "api_integrate", default: false
    t.boolean "phone_number", default: false
    t.bigint "project_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["project_id"], name: "index_integrations_on_project_id"
  end

  create_table "projects", force: :cascade do |t|
    t.string "name"
    t.integer "days"
    t.integer "total"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_projects_on_user_id"
  end

  create_table "securities", force: :cascade do |t|
    t.boolean "certificate", default: false
    t.boolean "factor_authentication", default: false
    t.bigint "project_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "dos_protection", default: false
    t.index ["project_id"], name: "index_securities_on_project_id"
  end

  create_table "socials", force: :cascade do |t|
    t.boolean "facebook_graph"
    t.boolean "sharing"
    t.boolean "forums"
    t.boolean "messaging"
    t.bigint "project_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["project_id"], name: "index_socials_on_project_id"
  end

  create_table "user_contents", force: :cascade do |t|
    t.boolean "dashboard", default: false
    t.boolean "acitivty_feed", default: false
    t.boolean "uploading", default: false
    t.boolean "profiles", default: false
    t.boolean "transactional_email", default: false
    t.boolean "tags", default: false
    t.boolean "rating", default: false
    t.boolean "audio_video", default: false
    t.boolean "searching", default: false
    t.bigint "project_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["project_id"], name: "index_user_contents_on_project_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.boolean "allow_password_change", default: false
    t.datetime "remember_created_at"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.string "name"
    t.string "nickname"
    t.string "image"
    t.string "email"
    t.json "tokens"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "sign_in_count", default: 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  end

  add_foreign_key "accounts", "projects"
  add_foreign_key "analytics", "projects"
  add_foreign_key "apps", "projects"
  add_foreign_key "billings", "projects"
  add_foreign_key "date_locations", "projects"
  add_foreign_key "integrations", "projects"
  add_foreign_key "projects", "users"
  add_foreign_key "securities", "projects"
  add_foreign_key "socials", "projects"
  add_foreign_key "user_contents", "projects"
end
