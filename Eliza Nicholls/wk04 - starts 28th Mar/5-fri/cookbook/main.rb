require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'


ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)
class Cook < ActiveRecord::Base
    has_many :cookbooks
end

class Cookbook < ActiveRecord::Base
    belongs_to :cook

end

@cookbook = @cook.cookbooks.create


get '/cookbooks' do  #index page. it's a convention
    @cookbooks = Cookbook.all
    erb :cookbooks_index
end

get '/cookbooks/new' do 
    erb :cookbooks_new
end

post '/cookbooks' do
    # cookbook = Cookbook.new
    # @cookbook = @cook.cookbooks.create
    @cookbooks = Cookbook.where(cook_id: @author.id)
    # cookbook.title = params[:title]
    # cookbook.cooks = params[:cooks]
    # cookbook.image = params[:image]
    cookbook.save
        redirect to('/cookbooks') # becomes a get request
    end
#SHOW
    get '/cookbooks/:id' do 
        @cookbook = Cookbook.find params[:id]
        erb :cookbooks_show
    end
# EDIT
    get '/cookbooks/:id/edit' do
        @cookbook = Cookbook.find params[:id]
        erb :cookbooks_edit
    end

#UPDATE
    post '/cookbooks/:id' do
        cookbook = Cookbook.find params[:id]
        cookbook.title = params[:title]
        cookbook.cooks = params[:cooks]
        cookbook.image = params[:image]
        cookbook.save
        redirect to("/cookbooks/#{params[:id]}")
    end
    
    # DELETE
    get '/cookbooks/:id/delete' do
        cookbook = Cookbook.find params[:id]
        cookbook.destroy
    redirect to('/cookbooks') #choose your next victim
    end
#############

    get '/cooks' do  #index page. it's a convention
        @cooks = Cook.all
        erb :cooks_index
    end
    
    get '/cooks/new' do 
        erb :cooks_new
    end
    
    post '/cooks' do
        cook = Cook.new
        cook.name = params[:name]
        cook.image = params[:image]
        cook.save
            redirect to("/cooks/#{cook.id}") # becomes a get request
        end
    #SHOW
        get '/cooks/:id' do 
            @cook = Cook.find params[:id]
            erb :cooks_show
        end
    # EDIT
        get '/cooks/:id/edit' do
            @cook = Cook.find params[:id]
            erb :cooks_edit
        end
    
    #UPDATE
        post '/cooks/:id' do
            cook = Cook.find params[:id]
            cook.name = params[:name]
            cook.image = params[:image]
            cook.save
            redirect to("/cooks/#{cook.id}")
        end
        
        # DELETE
        get '/cooks/:id/delete' do
            cook = Cook.find params[:id]
            cook.destroy
        redirect to('/cooks') #choose your next victim
        end

    #     post '/smoosh'
    #     @book = @author.books.create
    #     erb :smoosh
    # end