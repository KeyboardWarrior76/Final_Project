class ProjectSenderMailer < ApplicationMailer

	# using SendGrid's Ruby Library
	# https://github.com/sendgrid/sendgrid-ruby
	require 'sendgrid-ruby'

	include SendGrid

	def send_project(params)
		category = params[:categories]
		email = params[:email]
		project = params[:project]
		total = project[:total]

		account = category[:account]
		analytic = category[:analytic]
		app = category[:app]
		billing = category[:billing]
		date_location = category[:date_location]
		integration = category[:integration]
		security = category[:security]
		social = category[:social]
		user_content = category[:user_content]

		from = Email.new(email: 'chris.anderson955@gmail.com')
		to = Email.new(email: "#{email}")
		subject = 'Project Estimate'
		content = Content.new(type: 'text/html', value:
			"<html>
				<body>
				<div>
				 you chose
				 <br/>
				 #{account}
				 <br/>
				 #{analytic}
				 <br/>
				 #{app}
				 <br/>
				 #{billing}
				 <br/>
				 #{date_location}
				 <br/>
				 #{integration}
				 <br/>
				 #{security}
				 <br/>
				 #{social}
				 <br/>
				 #{user_content}
				 <br/>
				 Your total estimate would be $#{total}
				</div>
				</body>
			</html>"

		)
		mail = Mail.new(from, subject, to, content)
		sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
		response = sg.client.mail._('send').post(request_body: mail.to_json)

		puts response.status_code
		puts response.body
		puts response.headers
	end

end
