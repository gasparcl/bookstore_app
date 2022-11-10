class AddUrlImageToBooks < ActiveRecord::Migration[7.0]
  def change
    add_column :books, :url_image, :string
  end
end
