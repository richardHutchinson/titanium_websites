Ti.App.listDb = function() {
	var conn = Ti.Database.install('../sql/test', 'products');

	return {
		lists : {
			createTable : function() {
				conn.execute('CREATE TABLE IF NOT EXISTS products (productId INTEGER PRIMARY KEY, quantity NUMERIC, productName TEXT, category TEXT)');
			},
			dropTable : function() {
				conn.execute('DROP TABLE products');
			},
			deleteAll : function() {
				conn.execute('DELETE FROM products');
			},
			getAll : function() {
				var results = [];
				var resultSet = conn.execute('SELECT * FROM products');

				while (resultSet.isValidRow()) {
					results.push({
						id : resultSet.fieldByName('productId'), //rich not: may need to change the id to productId
						content : resultSet.fieldByName('category') //rich note: may need to change the variable to category
					});

					resultSet.next();

				}

				resultSet.close();
				return results;
			},
			get : function(id) {
				var result = null;
				var resultSet = conn.execute('SELECT * FROM products WHERE productId = ?', id);

				if (resultSet.isValidRow()) {
					result = {
						id : resultSet.fieldByName("id"),
						content : resultSet.fieldByName("content")
					};
				}

				resultSet.close();
				return result;
			},
			remove : function(id) {
				conn.execute("DELETE FROM products WHERE productId = ?", id);
				return conn.rowsAffected;
			},
			update : function(item) {
				conn.execute("UPDATE products SET category = ? WHERE productId = ?", item.content, item.id);
				return conn.rowsAffected;
			},
			count : function() {
				var count = 0, rows = conn.execute('select count(*) as count from category');

				while (rows.isValidRow()) {
					count = rows.fieldByName("count");
					rows.next();
				}

				rows.close();
				return count;
			},
			insert : function(content, id) {
				conn.execute('INSERT INTO products (category,productId) VALUES(?,?)', content, id);
				return conn.lastInsertRowId;
			}
		}
	};

}(); 