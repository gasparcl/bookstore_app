class Genre < ApplicationRecord
    has_many :books, class_name: "book", foreign_key: "reference_id"
end
