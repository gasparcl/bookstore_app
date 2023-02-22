# class Api::ApiController < ApplicationController
#   before_action :event
#   skip_before_action :verify_authenticity_token
#   # after_action :convert_response_body_keys_to_json_conventional_camelcase

#   # Allow the use of URL helpers inside JSON serializers.
#   serialization_scope :view_context
#   attr_reader :is_event

#   private

#   def event
#     @is_event = session[:event_id] != nil && session[:event_id] != ""
#   end

#   # def convert_response_body_keys_to_json_conventional_camelcase
#   #   if response.content_type == 'application/json; charset=utf-8'
#   #     body = JSON.parse(response.body) rescue nil

#   #     if body.is_a?(Array)
#   #       response_body = body.map { |obj| obj&.deep_transform_keys { |k| k.to_s.camelize(:lower).to_sym } }.to_json
#   #     else
#   #       response_body = body&.deep_transform_keys { |k| k.to_s.camelize(:lower).to_sym }.to_json
#   #     end

#   #     response.body = response_body
#   #   end
#   # end
# end
