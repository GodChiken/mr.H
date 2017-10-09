import React from 'react';
import { Progress } from 'semantic-ui-react';
import ContentList from 'components/common/ContentList';
import BckListEventButton from 'components/BucketList/List/BckListEventButton';
import BckListTitle from 'components/BucketList/List/BckListTitle';

import 'semantic-ui-css/semantic.min.css';

const BckListContent = ({
    bckTitle,
    completeDate,
    currentAmount,
    targetAmount,
    bckIdx,
    onShowBckDetailInfo,
    progressColor,
    onDepositClick,
    onDeleteClick
}) => {

    return(
        <ContentList
            left_title={
                <BckListTitle title={bckTitle}
                                 onTitleClick={(event)=>{onShowBckDetailInfo(bckIdx)}}
                                 completeDate={completeDate}
                />}
            right_title={
                <BckListEventButton bckIdx = {bckIdx}
                                       onDepositClick={onDepositClick}
                                       onDeleteClick={onDeleteClick}
                />
            }
        >
            <Progress percent={(currentAmount/targetAmount)*100}
                      onClick={(event)=>{onShowBckDetailInfo(bckIdx)}}
                      progress='percent'
                      color={progressColor}/>
        </ContentList>
    );
};
export default BckListContent;