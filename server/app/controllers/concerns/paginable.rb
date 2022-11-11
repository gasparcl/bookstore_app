# Concerns
# Concern responsible for paging controlling

# extend ActiveSuport::Concern
module Paginable

    # ╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗
    # ║║║║╣  ║ ╠═╣ ║║╠═╣ ║ ╠═╣
    # ╩ ╩╚═╝ ╩ ╩ ╩═╩╝╩ ╩ ╩ ╩ ╩
    DEFAULT_API_LIMIT = 20
    DEFAULT_API_OFFSET = 0

    def paging(records, limit = DEFAULT_API_LIMIT, offset = DEFAULT_API_OFFSET)
        # ActiveRecord::Relation
        paginated_records = records.limit(limit).offset(offset)

        {records: paginated_records, total: records.count}
    end


    # Creating filters
    # def where_chain(records, filters, datetime_fields = [], ignored_fields = [])
    #     filters_as_json = filters ? JSON.parse(filters) : []

    #     # When ActiveRecord::Relation is empty, returns
    #     if records.size == 0
    #         return records
    #     end

    #     model = records.first.class.name.constantize

    #     # Remove ignored fields
    #     ignored_fields.each { |field| filters_as_json.delete field.to_s }
        
    #     # Create Where chain
    #     filters_as_json.each do |filter|

    #         key = filter[0].split('.')
    #         value = filter[1].to_s.strip

    #         if !value.empty?
    #             model_name_or_date_field = key.first
    #             column_name = filter[0].include?('.') ? key.last : key.first
                    
    #             current_association = model&.reflect_on_all_associations.map { |i| i.name.to_s == model_name_or_date_field ? { name: i.name, table_name: i.table_name } : nil }.compact.first
    #             current_column_name = current_association ? current_association[:table_name] + '.' + column_name : column_name

    #             # Chain from date fields
    #             if datetime_fields.include?(model_name_or_date_field)
    #                 if is_period?(column_name)
    #                     comparator = 'initial' == column_name ? '>=' : '<='
    #                     records = records.where("#{model_name_or_date_field} #{comparator} convert(smalldatetime, ?, 103)", "#{value}")
    #                 else
    #                     records = records.where("#{model_name_or_date_field} >= convert(smalldatetime, ?, 103)", "#{value}")
    #                 end
    #             elsif is_valid_json?(value)
    #                 # Chain from multiple values
    #                 parsed_value = JSON.parse(value).map { |f| "'#{f}'"}
    #                 where_clause = "#{current_column_name} IN (#{parsed_value.join(',')})"

    #                 records = records.where(where_clause)                    
    #             else
    #                 # Default chain
    #                 records = records.where("#{current_column_name} like ?", "%#{value.to_s.strip}%")
    #             end

    #             records = records.left_joins(current_association[:name]) if current_association
    #         end

    #     end if filters

    #     return records
    # end

    # private

    # def is_period? column_name
    #     ['initial', 'final'].include?(column_name)
    # end

    # def is_valid_json? json
    #     result = JSON.parse(json)
    #     result.is_a?(Hash) || result.is_a?(Array)

    # rescue
    #     false
    # end
end