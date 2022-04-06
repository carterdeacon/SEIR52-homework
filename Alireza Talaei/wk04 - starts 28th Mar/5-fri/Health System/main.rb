require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Patient < ActiveRecord::Base
end

class Doctor < ActiveRecord::Base
end

get '/' do 
    erb :home
end

#  Patients  ######################################################

#Index
get '/patients' do 
    @patients = Patient.all
    erb :patients_index
end


#New
get '/patients/new' do     
    erb :patients_new
end

#Create
post '/patients' do 
    patient = Patient.new
    patient.name = params[:name]
    patient.family = params[:family]
    patient.age = params[:age].to_i
    patient.symptoms = params[:symptoms]
    patient.image = params[:image]
    patient.save
    redirect to("/patients/#{patient.id}")
end

#Show
get '/patients/:id' do 
    @patient = Patient.find params[:id]
    erb :patients_show
end

#Edit
get '/patients/:id/edit' do 
    @patient = Patient.find params[:id]
    erb :patients_edit
end

#Update

post '/patients/:id' do 
    patient = Patient.find params[:id]
    patient.name = params[:name]
    patient.family = params[:family]
    patient.age = params[:age].to_i
    patient.symptoms = params[:symptoms]
    patient.image = params[:image]
    patient.save
    redirect to ("/patients/#{patient.id}")
end
#Delete

get '/patients/:id/delete' do
    patient = Patient.find params[:id]
    patient.destroy
    redirect to ('/patients')
end


# Doctors   #########################################################

#Index
get '/doctors' do 
    @doctors = Doctor.all
    erb :doctors_index
end

#New
get '/doctors/new' do     
    erb :doctors_new
end
#Create
post '/doctors' do 
    doctor = Doctor.new
    doctor.name = params[:name]
    doctor.family = params[:family]
    doctor.speciality = params[:speciality]
    doctor.phone = params[:phone]
    doctor.image = params[:image]
    doctor.save
    redirect to("/doctors/#{doctor.id}")
end

#Show
get '/doctors/:id' do 
    @doctor = Doctor.find params[:id]
    erb :doctors_show
end
#Edit
get '/doctors/:id/edit' do
    @doctor = Doctor.find params[:id]
    erb :doctors_edit
end

#Update

post '/doctors/:id' do
    doctor = Doctor.find params[:id]
    doctor.name = params[:name]
    doctor.family = params[:family]
    doctor.speciality = params[:speciality]
    doctor.phone = params[:phone]
    doctor.image = params[:image]
    doctor.save
    redirect to ("/doctors/#{doctor.id}")
end


#Delete

get '/doctors/:id/delete' do   
    doctor = Doctor.find params[:id]
    doctor.destroy
    redirect to ('/doctors')
end