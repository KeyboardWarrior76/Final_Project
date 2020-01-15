class CreateUserContents < ActiveRecord::Migration[6.0]
  def change
    create_table :user_contents do |t|
      t.boolean :dashboard
      t.boolean :activity_feed
      t.boolean :uploading
      t.boolean :profiles
      t.boolean :transactional_emails
      t.boolean :tags
      t.boolean :ratings
      t.boolean :audio_video
      t.boolean :searching
      t.belongs_to :project, null: false, foreign_key: true

      t.timestamps
    end
  end
end
