class ProjectSenderMailer < ApplicationMailer
	# using SendGrid's Ruby Library
	# https://github.com/sendgrid/sendgrid-ruby

	require 'sendgrid-ruby'

	include SendGrid

	def send_project(params)

		cat = params[:categories]
		email = params[:email]
		project = params[:project]

		#More dry (works) but does a HUGE loop
		cat.each_key{ |item|
			cat[item].each do |key, value|
				if value === true
					value = '<span>✅</span>'
					cat[item].merge!({key => value})
				elsif value === false
					value = '<span>❌</span>'
					cat[item].merge!({key => value})
				else
					cat[item].merge!({key => value})
				end
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
				 	<p><u>Application</u></p>
						<li>Size: <span style='color:DodgerBlue;'>#{cat[:app][:size].capitalize}</span></li>
						<li>Size: <span style='color:MediumSeaGreen;'>#{cat[:app][:ui_level].capitalize}</span></li>
					 <p><u>Users & Accounts</u></p>
						 <li>Email/Password Login: #{cat[:account]["email_pass"]}</li>
						 <li>Facebook Login: #{cat[:account]["facebook"]}</li>
						 <li>Twitter Login: #{cat[:account]["twitter"]}</li>
						 <li>Google Login: #{cat[:account]["google"]}</li>
						 <li>LinkedIn Login: #{cat[:account]["linkedin"]}</li>
						 <li>GitHub Login: #{cat[:account]["github"]}</li>
						 <li>User Invitation Emails: #{cat[:account]["invitation"]}</li>
						 <li>Multi-tenant Accounts: #{cat[:account]["multi_account"]}</li>
						 <li>Subdomains: #{cat[:account]["subdomain"]}</li>
						 <li>Custom Domains: #{cat[:account]["custom"]}</li>
						<p><u>Admin, Feedback, & Analytics</u></p>
						 <li>CMS Integration: #{cat[:analytic]["cms"]}</li>
						 <li>User Admin Pages: #{cat[:analytic]["admin"]}</li>
						 <li>Moderation/Content Approval: #{cat[:analytic]["moderation"]}</li>
						 <li>Intercom: #{cat[:analytic]["intercom"]}</li>
						 <li>Usage Analytics: #{cat[:analytic]["usage"]}</li>
						 <li>Crash Reports: #{cat[:analytic]["crash_report"]}</li>
						 <li>Performance Monitoring: #{cat[:analytic]["performance"]}</li>
						 <li>Multilingual Support: #{cat[:analytic]["multilingual"]}</li>
						<p><u>Billing & eCommerce</u></p>
						 <li>Subscription Plans: #{cat[:billing]["subscription_plan"]}</li>
						 <li>Payment Proccessing: #{cat[:billing]["payment_processing"]}</li>
						 <li>Shopping Cart: #{cat[:billing]["shopping_cart"]}</li>
						 <li>User Marketplace: #{cat[:billing]["user_marketplace"]}</li>
						 <li>Product Management: #{cat[:billing]["product_management"]}</li>
						<p><u>Dates & Locations</u></p>
						 <li>Calendaring: #{cat[:date_location]["calendar"]}</li>
						 <li>Display Custom Map: #{cat[:date_location]["display"]}</li>
						 <li>Geolocation: #{cat[:date_location]["map_display"]}</li>
						 <li>Bookings: #{cat[:date_location]["booking"]}</li>
						<p><u>External APIs & Integrations</u></p>
						 <li>Third Party Services: #{cat[:integration]["third_party"]}</li>
						 <li>API Integration: #{cat[:integration]["api_integrate"]}</li>
						 <li>SMS Messaging: #{cat[:integration]["messaging"]}</li>
						 <li>Phone Number Masking: #{cat[:integration]["phone_number"]}</li>
						<p><u>Security</u></p>
							<li>SSL Certificate Based Security: #{cat[:security]["certificate"]}</li>
							<li>Two-Factor Authentication: #{cat[:security]["factor_authentication"]}</li>
							<li>DoS Protection: #{cat[:security]["dos_protection"]}</li>
						<p><u>Social & Engagement</u></p>
							<li>Push to Facebook Graph: #{cat[:social]["facebook_graph"]}</li>
							<li>Forums or Commenting: #{cat[:social]["forums"]}</li>
							<li>Social Sharing: #{cat[:social]["sharing"]}</li>
							<li>Messaging: #{cat[:social]["messaging"]}</li>
						<p><u>User Generated Content</u></p>
							<li>Dashboard: #{cat[:user_content]["dashboard"]}</li>
							<li>Activiy Feed: #{cat[:user_content]["activity_feed"]}</li>
							<li>File Uploading: #{cat[:user_content]["uploading"]}</li>
							<li>User Profiles: #{cat[:user_content]["profile"]}</li>
							<li>Transactional Emails: #{cat[:user_content]["transactional_email"]}</li>
							<li>Tags: #{cat[:user_content]["tags"]}</li>
							<li>Ratings or Reviews: #{cat[:user_content]["rating"]}</li>
							<li>Audio/Video Proccessing: #{cat[:user_content]["audio_video"]}</li>
							<li>Free Text Searching: #{cat[:user_content]["searching"]}</li>
				 	 </ul>
					 Based on your app,
					 the total estimation would be $#{project[:total]}
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
