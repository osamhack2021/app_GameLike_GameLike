module.exports = (sequelize, DataTypes) =>(
	sequelize.define('post',{
		content:{
			type:DataTypes.STRING(140),
			allowNull:false,
		},
		img: {
			type:DataTypes.STRING(200), //이미지 주소, 이미지는 서버에 저장
			allowNull: true,
		}
	},{
		timestamps: true,
		paranoid:true,
	})
);