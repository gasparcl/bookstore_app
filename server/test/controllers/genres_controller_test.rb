require "test_helper"

class GenresControllerTest < ActionDispatch::IntegrationTest
  setup do
    @genre = genres(:one)
  end

  test "should get index" do
    get genres_url, as: :json
    assert_response :success
  end

  test "should create genre" do
    assert_difference("Genre.count") do
      post genres_url, params: { genre: { description: @genre.description } }, as: :json
    end

    assert_response :created
  end

  test "should show genre" do
    get genre_url(@genre), as: :json
    assert_response :success
  end

  test "should update genre" do
    patch genre_url(@genre), params: { genre: { description: @genre.description } }, as: :json
    assert_response :success
  end

  test "should destroy genre" do
    assert_difference("Genre.count", -1) do
      delete genre_url(@genre), as: :json
    end

    assert_response :no_content
  end
end
