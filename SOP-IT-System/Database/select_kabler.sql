SELECT 
p.UUID as p_UUID,
p.name as p_name,
p.brand_id as p_brand_id,
p.category_id as p_category_id,
p.date_created as p_date_created,
p.date_updated as p_date_updated,
p.product_id_prefix as p_product_id_prefix,
p.amount as p_amount

FROM products p 
LEFT JOIN categories c ON p.category_id = c.UUID
LEFT JOIN category_groups cg on cg.UUID = c.category_group_id

WHERE cg.UUID = 12