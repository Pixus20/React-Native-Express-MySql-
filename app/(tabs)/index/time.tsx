import AllMoneyBill from '@/components/moneyBill/allmoneybill';
import ReportPage from '@/components/timeBill/allTime';
import React from 'react';
import { SafeAreaView } from 'react-native';


export default function App() {
  return (
    <SafeAreaView>
      <ReportPage/>
      <AllMoneyBill />
    </SafeAreaView>
  );
}