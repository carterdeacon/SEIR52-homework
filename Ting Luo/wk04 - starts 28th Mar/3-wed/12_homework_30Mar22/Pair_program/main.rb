require "sinatra"
require "sinatra/reloader"

# get "/" do
#     erb :home
# end

get "*" do
    path = request.path_info
    puts path
    pages = {
        "/" => {
            :text => "Do you have a test for that?",
            :yes => "pass",
            :no => "write_test",
        },
        "/pass" => {
            :text => "Does the test pass?",
            :yes => "refactor",
            :no => "write_code",
        },
        "/refactor" => {
            :text => "Need to refactor?",
            :yes => "do_refactor",
            :no => "new_feature",
        },
        "/do_refactor" =>{
            :text => "Refactor the code.",
            :yes => "",
            :no => "",  
        },
        "/write_code" =>{
            :text => "Write just enough code for the test to pass.",
            :yes => "",
            :no => "",  
        },
        "/new_feature" =>{
            :text => "Select a new feature to implement.",
            :yes => "",
            :no => "",
        },
    }
    if path == "/write_code" || path =="/do_refactor"
        @link = "pass"
        @button_text = "Done"
    end
    if path == "/new_feature"
        @link = ""
        @button_text = "Continue"
    end

    @text = pages[path][:text]
    @yes = pages[path][:yes]
    @no = pages[path][:no]
    erb :home
end