class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string :title
      t.text :synopsis
      t.text :review
      t.string :language
      t.integer :page_count
      t.date :release_date
      t.references :genre, null: false, foreign_key: true
      t.references :author, null: false, foreign_key: true
      t.references :publisher, null: false, foreign_key: true

      t.timestamps
    end
  end
end
