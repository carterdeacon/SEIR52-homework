require 'test_helper'

class GodsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get gods_index_url
    assert_response :success
  end

  test "should get new" do
    get gods_new_url
    assert_response :success
  end

  test "should get edit" do
    get gods_edit_url
    assert_response :success
  end

  test "should get show" do
    get gods_show_url
    assert_response :success
  end

end
