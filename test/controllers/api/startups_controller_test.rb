require "test_helper"

class Api::StartupsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_startups_create_url
    assert_response :success
  end

  test "should get update" do
    get api_startups_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_startups_destroy_url
    assert_response :success
  end

  test "should get index" do
    get api_startups_index_url
    assert_response :success
  end

  test "should get show" do
    get api_startups_show_url
    assert_response :success
  end
end
