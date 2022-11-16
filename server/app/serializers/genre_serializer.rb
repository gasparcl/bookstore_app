class GenreSerializer < ActiveModel::Serializer
  attributes :id, :description

  has_many  :books
end
