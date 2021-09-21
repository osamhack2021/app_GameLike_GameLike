module.exports = ((sequelize, DataTypes)=>(
	sequelize.define('user', {
		email:{
			type: DataTypes.STRING(40),
			allowNull: false,
			unique:true,
		},
		nick:{
			type:DataTypes.STRING(15),
			allowNull:false,
		},
		password:{
			type:DataTypes.STRING(100),
			allowNull: true, // 카카오 로그인은 비밀번호 없으므로
		},
		provider:{
			type: DataTypes.STRING(10),
			allowNull: false,
			defaultValue: 'local',
		},
		snsId:{
			type: DataTypes.STRING(30), //카카오로 로그인했을 경우에만 알려줌.
			allowNull: true,
		},
	},{
		timestamps: true,
		paranoid:true,
	})
));

// zero 25 2018-07-20 2018-08-20
// nero 32 2018-07-21