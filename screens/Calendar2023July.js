import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const Calendar2023July = () => {
  return (
    <View style={styles.calendar2023July}>
      <View style={styles.datingMonthLabel}>
        <Text style={[styles.july, styles.numFlexBox]}>July</Text>
      </View>
      <View style={[styles.frame, styles.weekSpaceBlock]}>
        <View style={[styles.datingWeekLabel, styles.datingLayout1]}>
          <Text style={[styles.sun, styles.datingLayout1]}>Sun</Text>
        </View>
        <View style={[styles.datingWeekLabel1, styles.datingLayout1]}>
          <Text style={[styles.sun, styles.datingLayout1]}>Mon</Text>
        </View>
        <View style={[styles.datingWeekLabel2, styles.datingLayout1]}>
          <Text style={[styles.sun, styles.datingLayout1]}>Tue</Text>
        </View>
        <View style={[styles.datingWeekLabel3, styles.datingLayout1]}>
          <Text style={[styles.sun, styles.datingLayout1]}>Wed</Text>
        </View>
        <View style={[styles.datingWeekLabel4, styles.datingLayout1]}>
          <Text style={[styles.sun, styles.datingLayout1]}>Thu</Text>
        </View>
        <View style={[styles.datingWeekLabel5, styles.datingLayout1]}>
          <Text style={[styles.sun, styles.datingLayout1]}>Fri</Text>
        </View>
        <View style={[styles.datingWeekLabel6, styles.datingLayout1]}>
          <Text style={[styles.sun, styles.datingLayout1]}>Sat</Text>
        </View>
      </View>
      <View style={[styles.week, styles.weekSpaceBlock]}>
        <View style={[styles.datingDayOutOfMonth, styles.numLayout]}>
          <Text style={[styles.num, styles.numLayout]}>25</Text>
        </View>
        <View style={[styles.datingDayOutOfMonth1, styles.datingLayout]}>
          <Text style={[styles.num, styles.numLayout]}>26</Text>
        </View>
        <View style={[styles.datingDayOutOfMonth1, styles.datingLayout]}>
          <Text style={[styles.num, styles.numLayout]}>27</Text>
        </View>
        <View style={[styles.datingDayOutOfMonth1, styles.datingLayout]}>
          <Text style={[styles.num, styles.numLayout]}>28</Text>
        </View>
        <View style={[styles.datingDayOutOfMonth1, styles.datingLayout]}>
          <Text style={[styles.num, styles.numLayout]}>29</Text>
        </View>
        <View style={[styles.datingDayOutOfMonth1, styles.datingLayout]}>
          <Text style={[styles.num, styles.numLayout]}>30</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numLayout]}>1</Text>
        </View>
      </View>
      <View style={[styles.week, styles.weekSpaceBlock]}>
        <View style={styles.numLayout}>
          <Text style={[styles.num, styles.numLayout]}>2</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numLayout]}>3</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numLayout]}>4</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numLayout]}>5</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numLayout]}>6</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numLayout]}>7</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numLayout]}>8</Text>
        </View>
      </View>
      <View style={[styles.week, styles.weekSpaceBlock]}>
        <View style={styles.numLayout}>
          <Text style={[styles.num, styles.numLayout]}>9</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numLayout]}>10</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num16, styles.numLayout]}>11</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num16, styles.numLayout]}>12</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num16, styles.numLayout]}>13</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numLayout]}>14</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numLayout]}>15</Text>
        </View>
      </View>
      <View style={[styles.week, styles.weekSpaceBlock]}>
        <View style={styles.numLayout}>
          <Text style={[styles.num, styles.numLayout]}>16</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numLayout]}>17</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numLayout]}>18</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numLayout]}>19</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numLayout]}>20</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numLayout]}>21</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numLayout]}>22</Text>
        </View>
      </View>
      <View style={[styles.week, styles.weekSpaceBlock]}>
        <View style={styles.numLayout}>
          <Text style={[styles.num, styles.numLayout]}>23</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numLayout]}>24</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numLayout]}>25</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numLayout]}>26</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numLayout]}>27</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numLayout]}>28</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numLayout]}>29</Text>
        </View>
      </View>
      <View style={[styles.week, styles.weekSpaceBlock]}>
        <View style={styles.numLayout}>
          <Text style={[styles.num, styles.numLayout]}>30</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numLayout]}>31</Text>
        </View>
        <View style={[styles.datingDayOutOfMonth1, styles.datingLayout]}>
          <Text style={[styles.num, styles.numLayout]}>1</Text>
        </View>
        <View style={[styles.datingDayOutOfMonth1, styles.datingLayout]}>
          <Text style={[styles.num, styles.numLayout]}>2</Text>
        </View>
        <View style={[styles.datingDayOutOfMonth1, styles.datingLayout]}>
          <Text style={[styles.num, styles.numLayout]}>3</Text>
        </View>
        <View style={[styles.datingDayOutOfMonth1, styles.datingLayout]}>
          <Text style={[styles.num, styles.numLayout]}>4</Text>
        </View>
        <View style={[styles.datingDayOutOfMonth1, styles.datingLayout]}>
          <Text style={[styles.num, styles.numLayout]}>5</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  numFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
    left: 0,
  },
  weekSpaceBlock: {
    marginTop: 6,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  datingLayout1: {
    width: 30,
    height: 18,
    top: 0,
    position: "absolute",
  },
  numLayout: {
    height: 30,
    width: 30,
  },
  datingLayout: {
    marginLeft: 6,
    height: 30,
    width: 30,
  },
  july: {
    color: Color.black,
    width: 246,
    fontSize: FontSize.bodytext200_size,
    top: 0,
    position: "absolute",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
    height: 25,
  },
  datingMonthLabel: {
    height: 25,
    alignSelf: "stretch",
  },
  sun: {
    fontSize: FontSize.size_xs,
    textTransform: "uppercase",
    color: Color.slategray,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
    left: 0,
  },
  datingWeekLabel: {
    left: 0,
    width: 30,
  },
  datingWeekLabel1: {
    left: 36,
  },
  datingWeekLabel2: {
    left: 72,
  },
  datingWeekLabel3: {
    left: 108,
  },
  datingWeekLabel4: {
    left: 144,
  },
  datingWeekLabel5: {
    left: 180,
  },
  datingWeekLabel6: {
    left: 216,
  },
  frame: {
    height: 18,
    marginTop: 6,
    alignSelf: "stretch",
  },
  num: {
    color: Color.darkslategray_200,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
    left: 0,
    fontSize: FontSize.bodytext200_size,
    top: 0,
    position: "absolute",
  },
  datingDayOutOfMonth: {
    opacity: 0.5,
  },
  datingDayOutOfMonth1: {
    opacity: 0.5,
  },
  week: {
    flexDirection: "row",
  },
  num16: {
    color: Color.darkblue_100,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
    left: 0,
    fontSize: FontSize.bodytext200_size,
    top: 0,
    position: "absolute",
  },
  calendar2023July: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Calendar2023July;
