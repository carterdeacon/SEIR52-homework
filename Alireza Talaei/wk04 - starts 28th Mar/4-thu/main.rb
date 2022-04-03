require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/patients' do
    @patients = query_db "SELECT * FROM patients"
    erb :home
end

get '/patients/new' do
    erb :patients_new
end

post '/patients' do
    query_db "INSERT INTO patients ('name', 'family', 'phone', 'image') VALUES ('#{params[:name]}', '#{params[:family]}', '#{params[:phone]}', '#{params[:image]}')"
    redirect to('/patients')
end


get '/patients/:id' do
    @patient = query_db "SELECT * FROM patients WHERE id=#{params[:id]}"
    @patient = @patient.first
    erb :patient_show
end

get '/patients/:id/edit' do
    @patient = query_db "SELECT * FROM patients WHERE id=#{params[:id]}"
    @patient = @patient.first
    erb :patient_edit
end

get '/patients/:id' do 
    query_db "UPDATE patients SET name='#{params[:name]}', family='#{params[:family]}', phone='#{params[:phone]}', image='#{params[:image]}' WHERE id=#{params[:id]} "
    redirect to("/patients")
end

post '/patients/:id' do
    query_db "UPDATE patients SET name='#{params[:name]}', family='#{params[:family]}', phone='#{params[:phone]}', image='#{params[:image]}' WHERE id=#{params[:id]}"
    redirect to ("/patients/#{params[:id]}")
    "Thanks for updating"
end

get '/patients/:id/delete' do
    query_db "DELETE FROM patients WHERE id=#{params[:id]}"
    redirect to('/patients')
end



def query_db(sql_statement)
    puts sql_statement
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end