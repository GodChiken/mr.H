import mapper from '../../mapper';


exports.getBckListM = (userIdx) => {
    return mapper.bucketList
        .findAll({
            attributes: ['bckIdx','bckTitle',`targetAmount`,'typeIdx',
                [mapper.sequelize.fn('date_format', mapper.sequelize.col('startDate'), '%Y-%m-%d'), 'startDate'],
                [mapper.sequelize.fn('date_format', mapper.sequelize.col('completeDate'), '%Y-%m-%d'), 'completeDate']
            ],
            include: [{
                model: mapper.depositList,
                where: {
                    targetType : {$col: 'bucketList.typeIdx'}
                },
                required: false
            }],
            where: {
                userIdx: { $and :[userIdx] },
                delFlag: { $and :['N'] }
            }
        })
        .then(function(results) {
            return results;
        })
        .catch(function(err) {
            console.log(err);
        });
};

exports.findBckInfoM = (bckIdx, userIdx) => {
    return mapper.bucketList
        .findOne({
            attributes: ['bckIdx','bckTitle','bckDetail',`targetAmount`,'typeIdx',`startDate`,'completeDate'],
            include: [{
                model: mapper.depositList,
                where: {
                    targetType : {$col: 'bucketList.typeIdx'}
                },
                required: false
            }],
            where: {
                userIdx: { $and :[userIdx] },
                delFlag: { $and :['N'] },
                bckIdx: { $and :[bckIdx] }
            }
        })
        .then(function(results) {
            return results;
        })
        .catch(function(err) {
            console.log(err);
        });
};

exports.createBucketListM = (bucketListInfo, bckType, userIdx) => {
    return mapper.bucketList
        .create({
            bckTitle : bucketListInfo.title,
            bckDetail : bucketListInfo.detail,
            targetAmount : bucketListInfo.targetAmount,
            completeDate : bucketListInfo.completeDate,
            typeIdx : bckType,
            userIdx : userIdx
        })
        .then(function(results) {
            return results.bckIdx;
        })
        .catch(function(err) {
            console.log(err);
        });
};


exports.updateBucketListM = (bckIdx, bucketListInfo) => {
    return mapper.bucketList
        .update(
            bucketListInfo,
            {
                where: {
                   bckIdx: bckIdx,
                   delFlag: 'N'
                }
            }
        )
        .then(function(results) {
            return results;
        })
        .catch(function(err) {
            console.log(err);
        });
};

exports.deleteBucketListM = (bckIdx) => {
    return mapper.bucketList
        .update(
            {delFlag : 'Y'},
            {where: {bckIdx: bckIdx}}
        )
        .then(function(results) {
            return results;
        })
        .catch(function(err) {
            console.log(err);
        });
};
