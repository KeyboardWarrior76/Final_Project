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

		email_pass = account[:email_pass]

		account.each{ |item|
			if item == true
				item = 'yes'
				puts item
			else
				item = 'no'
				puts item
			end
		}


		from = Email.new(email: 'chris.anderson955@gmail.com')
		to = Email.new(email: "#{email}")
		subject = 'Project Estimate'
		content = Content.new(type: 'text/html', value:
			"<html>
				<body>
				<div>
				 Your app estimation is complete!
				 <br/>
				 Your app had the following selections:
				 <ul>
				 	<p><u>App Size</u></p>
						 <li>Email & Password: #{account[:email_pass]}</li>
						 <li>Facebook: #{email_pass}</li>
						 <li>Twitter: #{email_pass}</li>
						 <li>Google: #{email_pass}</li>
						 <li>LinkedIn: #{email_pass}</li>
						 <li>GitHub: #{email_pass}</li>
						 <li>Invitation: #{email_pass}</li>
						 <li>Multiple Accounts: #{email_pass}</li>
						 <li>Subdomain: #{email_pass}</li>
						 <li>Custom: #{email_pass}</li>
					 <p><u>UI Level</u></p>
					 <li>#{email_pass}</li>
					 <p><u>Accounts & Users</u></p>
					 <li>#{email_pass}</li>
					 <p><u>Analytics</u></p>
					 <li>#{email_pass}</li>
					 <p><u>Billing</u></p>
					 <li>#{email_pass}</li>
					 <p><u>Dates & Locations</u></p>
					 <li>#{email_pass}</li>
					 <p><u>Integrations</u></p>
					 <li>#{security}</li>
					 <p><u>Security</u></p>
					 <li>#{email_pass}</li>
					 <p><u>Social</u></p>
					 <li>#{email_pass}</li>
					 <p><u>User Content</u></p>
					 <li>#{email_pass}</li>
				 </ul>
				 Based on your app,
				 the total estimation would be $#{total}
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
