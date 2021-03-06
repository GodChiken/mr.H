import React from 'react';
import CardBlock from 'components/common/Block/CardBlock';
import CardItem from 'components/common/Item/CardItem';
import { Icon } from 'semantic-ui-react';
import { getRemainDate } from 'lib/util';
import './PropertyList.css';
 
const PropertyList = ({
    fixedDeposit,
    SavingDeposit,
    onShowDetail,
    comma
}) => {

    const IconTag = <Icon name='ellipsis horizontal' size='large'/>;

    const fixedDepositRowList = fixedDeposit.length === 0 ?
        <CardItem title='예금내역이 없습니다.'/>:
        fixedDeposit.map((depositInfo) => (
        <div key={depositInfo.propertyIdx}
            onClick={(e)=>{onShowDetail(depositInfo.propertyIdx)}}>
            <CardItem key={depositInfo.propertyIdx}
                      title={depositInfo.propertyTitle+' (목표까지 '+getRemainDate(depositInfo.startDate, depositInfo.completeDate)+'일 남음)'}
                      subTitle={'예금액 :'+comma(depositInfo.targetAmount)}
                      extColor='brand'
                      extInfo={IconTag}/>
        </div>
    ));

    const SavingDepositRowList = SavingDeposit.length === 0 ?
        <CardItem title='적금내역이 없습니다.'/>:
        SavingDeposit.map((depositInfo) => {
            const SaveMoneyList = depositInfo.depositLists;
            const totalSaveMoney = SaveMoneyList.reduce((prev, save) => prev + save.depositAmount, 0);
            return  <div key={depositInfo.propertyIdx}
                         onClick={(e)=>{onShowDetail(depositInfo.propertyIdx)}}>
                            <CardItem key={depositInfo.propertyIdx}
                                      title={depositInfo.propertyTitle+' (목표까지 '+(comma(depositInfo.targetAmount-totalSaveMoney))+'원 남음)'}
                                      onClick={(e)=>{onShowDetail(depositInfo.propertyIdx)}}
                                      subTitle={'적금만기금액 :'+comma(depositInfo.targetAmount)}
                                      extColor='brand'
                                      extInfo={IconTag}/>
                    </div>

    });

    return (
        <div className='property-list'>
            <CardBlock
                headerTitle='적금 리스트'
                headerSubArea=''>
                {SavingDepositRowList}
            </CardBlock>
            <CardBlock
                headerTitle='예금 리스트'
                headerSubArea=''>
                {fixedDepositRowList}
            </CardBlock>
        </div>
    );
};
 
export default PropertyList;