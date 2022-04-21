require 'test_helper'

class PantheonsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get pantheons_index_url
    assert_response :success
  end

  test "should get new" do
    get pantheons_new_url
    assert_response :success
  end

  test "should get edit" do
    get pantheons_edit_url
    assert_response :success
  end

  test "should get show" do
    get pantheons_show_url
    assert_response :success
  end

end
