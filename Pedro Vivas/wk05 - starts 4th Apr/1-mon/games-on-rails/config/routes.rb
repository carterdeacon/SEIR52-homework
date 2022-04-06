Rails.application.routes.draw do
	root :to => 'games#home'
	
	get '/magic8/question' => 'magic8#question'
	get '/magic8/prediction' => 'magic8#prediction'
	get '/secretnumber/makeguess' => 'secretnumber#makeguess'
	get '/secretnumber/answer' => 'secretnumber#answer'
	get '/rrr/makeplay' => 'rrr#makeplay'
	get '/rrr/whowins' => 'rrr#whowins'
end
