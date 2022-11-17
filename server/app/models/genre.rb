class Genre < ApplicationRecord
    has_many :books

    # Kaminari Pagination
    paginates_per 10
end
