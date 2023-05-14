import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const SixtyThree = () => {
  return (
    <div>
      <Helmet>
        <title>063 - سورة المنافقون</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة المنافقون</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          إِذَا جَآءَكَ ٱلۡمُنَٰفِقُونَ قَالُواْ نَشۡهَدُ إِنَّكَ لَرَسُولُ
          ٱللَّهِۗ وَٱللَّهُ يَعۡلَمُ إِنَّكَ لَرَسُولُهُۥ وَٱللَّهُ يَشۡهَدُ
          إِنَّ ٱلۡمُنَٰفِقِينَ لَكَٰذِبُونَ (1) ٱتَّخَذُوٓاْ أَيۡمَٰنَهُمۡ
          جُنَّةٗ فَصَدُّواْ عَن سَبِيلِ ٱللَّهِۚ إِنَّهُمۡ سَآءَ مَا كَانُواْ
          يَعۡمَلُونَ (2) ذَٰلِكَ بِأَنَّهُمۡ ءَامَنُواْ ثُمَّ كَفَرُواْ
          فَطُبِعَ عَلَىٰ قُلُوبِهِمۡ فَهُمۡ لَا يَفۡقَهُونَ (3) ۞وَإِذَا
          رَأَيۡتَهُمۡ تُعۡجِبُكَ أَجۡسَامُهُمۡۖ وَإِن يَقُولُواْ تَسۡمَعۡ
          لِقَوۡلِهِمۡۖ كَأَنَّهُمۡ خُشُبٞ مُّسَنَّدَةٞۖ يَحۡسَبُونَ كُلَّ
          صَيۡحَةٍ عَلَيۡهِمۡۚ هُمُ ٱلۡعَدُوُّ فَٱحۡذَرۡهُمۡۚ قَٰتَلَهُمُ
          ٱللَّهُۖ أَنَّىٰ يُؤۡفَكُونَ (4) وَإِذَا قِيلَ لَهُمۡ تَعَالَوۡاْ
          يَسۡتَغۡفِرۡ لَكُمۡ رَسُولُ ٱللَّهِ لَوَّوۡاْ رُءُوسَهُمۡ
          وَرَأَيۡتَهُمۡ يَصُدُّونَ وَهُم مُّسۡتَكۡبِرُونَ (5) سَوَآءٌ
          عَلَيۡهِمۡ أَسۡتَغۡفَرۡتَ لَهُمۡ أَمۡ لَمۡ تَسۡتَغۡفِرۡ لَهُمۡ لَن
          يَغۡفِرَ ٱللَّهُ لَهُمۡۚ إِنَّ ٱللَّهَ لَا يَهۡدِي ٱلۡقَوۡمَ
          ٱلۡفَٰسِقِينَ (6) هُمُ ٱلَّذِينَ يَقُولُونَ لَا تُنفِقُواْ عَلَىٰ مَنۡ
          عِندَ رَسُولِ ٱللَّهِ حَتَّىٰ يَنفَضُّواْۗ وَلِلَّهِ خَزَآئِنُ
          ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ وَلَٰكِنَّ ٱلۡمُنَٰفِقِينَ لَا يَفۡقَهُونَ
          (7) يَقُولُونَ لَئِن رَّجَعۡنَآ إِلَى ٱلۡمَدِينَةِ لَيُخۡرِجَنَّ
          ٱلۡأَعَزُّ مِنۡهَا ٱلۡأَذَلَّۚ وَلِلَّهِ ٱلۡعِزَّةُ وَلِرَسُولِهِۦ
          وَلِلۡمُؤۡمِنِينَ وَلَٰكِنَّ ٱلۡمُنَٰفِقِينَ لَا يَعۡلَمُونَ (8)
          يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ لَا تُلۡهِكُمۡ أَمۡوَٰلُكُمۡ وَلَآ
          أَوۡلَٰدُكُمۡ عَن ذِكۡرِ ٱللَّهِۚ وَمَن يَفۡعَلۡ ذَٰلِكَ
          فَأُوْلَٰٓئِكَ هُمُ ٱلۡخَٰسِرُونَ (9) وَأَنفِقُواْ مِن مَّا
          رَزَقۡنَٰكُم مِّن قَبۡلِ أَن يَأۡتِيَ أَحَدَكُمُ ٱلۡمَوۡتُ فَيَقُولَ
          رَبِّ لَوۡلَآ أَخَّرۡتَنِيٓ إِلَىٰٓ أَجَلٖ قَرِيبٖ فَأَصَّدَّقَ
          وَأَكُن مِّنَ ٱلصَّٰلِحِينَ (10) وَلَن يُؤَخِّرَ ٱللَّهُ نَفۡسًا إِذَا
          جَآءَ أَجَلُهَاۚ وَٱللَّهُ خَبِيرُۢ بِمَا تَعۡمَلُونَ (11)
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default SixtyThree;
