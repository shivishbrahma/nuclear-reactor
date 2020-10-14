module.exports = {
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							sourceMap: true,
						},
					},
					"css-loader",
					{
						loader: "sass-loader",
						options: {
							implementation: require("sass"),
							sourceMap: true,
							outFile: "public/index.css",
							sassOptions: {
								outputStyle: "compressed",
							},
						},
					},
				],
			},
		],
	},
};
