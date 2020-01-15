class CreateUserContents < ActiveRecord::Migration[6.0]
  def change
    create_table :user_contents do |t|
      t.boolean :dashboard
      t.boolean :activity_feed
      t.boolean :uploading
      t.boolean :profile
      t.boolean :transactional_email
      t.boolean :tags
      t.boolean :rating
      t.boolean :audio_video
      t.boolean :searching
      t.belongs_to :project, null: false, foreign_key: true

      t.timestamps
    end
  end
end
