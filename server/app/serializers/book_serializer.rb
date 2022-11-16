class BookSerializer < ActiveModel::Serializer
  attributes  :id , 
              :title,
              :synopsis,
              :language,
              :page_count,
              :release_date,
              :isbn,
              :url_image

  belongs_to :author
  belongs_to :publisher
  belongs_to :genre
end
