import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {styles} from './styles';
import {
  useGetAllTransactionQuery,
  useGetBalanceQuery,
} from '../../store/walletApi';
import {colors} from '../../utils';
import moment from 'moment';
import {Navbar} from '../../components/navbar';

export const Home = () => {
  const {data: allTransaction, isLoading} = useGetAllTransactionQuery();
  const {data: balance, isLoading: isLoadingBalance} = useGetBalanceQuery();

  return (
    <View style={styles.container}>
      {isLoading || isLoadingBalance ? (
        <ActivityIndicator size={20} color={colors.white[900]} />
      ) : (
        <>
          <Navbar />
          <View style={styles.textWrap}>
            <Text style={styles.span}>Your current balance is</Text>
            <Text
              style={
                styles.balance
              }>{`${balance?.currency} ${balance?.balance}`}</Text>
          </View>
          <View style={styles.buttonFlex}>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Request Money</Text>
            </Pressable>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Send Money</Text>
            </Pressable>
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.lineWrap}>
              <View style={styles.line} />
            </View>
            <View style={styles.row}>
              <Text style={styles.subtitle}>All Transactions</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.grid}>
                {allTransaction?.transactions.map((item, index) => (
                  <View
                    style={[
                      styles.transactionBox,
                      (index + 1) % 2 !== 0 && styles.background,
                    ]}
                    key={item.id}>
                    <View style={styles.col}>
                      <Text style={styles.currency}>{item.currency}</Text>
                      <View
                        style={
                          item.type === 'credit'
                            ? styles.creditStatusWrap
                            : styles.debitStatusWrap
                        }>
                        <Text style={styles.StatusText}>{item.type}</Text>
                      </View>
                    </View>
                    <View style={styles.col2}>
                      <Text
                        style={
                          item.type === 'credit'
                            ? styles.creditAmount
                            : styles.debitAmount
                        }>
                        {item.amount}
                      </Text>
                      <Text style={styles.date}>
                        {moment(item.timestamp).format('MMM do, YYYY hh:mma')}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
        </>
      )}
    </View>
  );
};
