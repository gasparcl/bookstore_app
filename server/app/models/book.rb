class Book < ApplicationRecord
  belongs_to :genre
  belongs_to :author
  belongs_to :publisher

  # Kaminari Pagination
  paginates_per 20
end
