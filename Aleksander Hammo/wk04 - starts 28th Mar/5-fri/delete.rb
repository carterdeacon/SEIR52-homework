
# INDEX
# Show all the butterflies (in summary)
get '/jobs' do
    @jobs = Job.all
    erb :jobs_index
end

# NEW
# A blank form in which to describe a new job
get '/jobs/new' do
    erb :jobs_new
end

# CREATE
# Inserts the parameters from the NEW form into the database
post '/jobs' do
    job = Job.new
    job.number = params[:number]
    job.title = params[:title] 
    job.theme = params[:theme]
    job.guest_image = params[:guest_image]
    job.save
    redirect to('/jobs') # GET
end

# SHOW
# Show a single job (in detail)
get '/jobs/:id' do
    @job = Job.find params[:id]
    erb :jobs_show
end

# EDIT
# A prefilled form in which to modify an existing job
get '/jobs/:id/edit' do
    @job = job.find params[:id]
    erb :jobs_edit
end

# UPDATE
# Updates the database with the parameters entered in the EDIT form
post '/jobs/:id' do
    job = Job.find params[:id]
    job.number = params[:number]
    job.title = params[:title] 
    job.theme = params[:theme]
    job.guest_image = params[:guest_image]
    job.save
    redirect to("/jobs/#{ params[:id] }") # GET request
end

# DELETE
# Deletes the job entirely from the database
get '/jobs/:id/delete' do
    job = Job.find params[:id]
    job.destroy
    redirect to('/jobs') # choose your next victim
end

##have a column in theme table called theme_id