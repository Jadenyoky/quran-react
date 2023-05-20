import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const SeventyOne = () => {
  return (
    <div>
      <Helmet>
        <title>071 - سورة نوح</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة نوح</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          إِنَّآ أَرۡسَلۡنَا نُوحًا إِلَىٰ قَوۡمِهِۦٓ أَنۡ أَنذِرۡ قَوۡمَكَ مِن
          قَبۡلِ أَن يَأۡتِيَهُمۡ عَذَابٌ أَلِيمٞ
          <span className="numberTheme"> (1) </span> قَالَ يَٰقَوۡمِ إِنِّي
          لَكُمۡ نَذِيرٞ مُّبِينٌ
          <span className="numberTheme"> (2) </span> أَنِ ٱعۡبُدُواْ ٱللَّهَ
          وَٱتَّقُوهُ وَأَطِيعُونِ
          <span className="numberTheme"> (3) </span> يَغۡفِرۡ لَكُم مِّن
          ذُنُوبِكُمۡ وَيُؤَخِّرۡكُمۡ إِلَىٰٓ أَجَلٖ مُّسَمًّىۚ إِنَّ أَجَلَ
          ٱللَّهِ إِذَا جَآءَ لَا يُؤَخَّرُۚ لَوۡ كُنتُمۡ تَعۡلَمُونَ
          <span className="numberTheme"> (4) </span> قَالَ رَبِّ إِنِّي دَعَوۡتُ
          قَوۡمِي لَيۡلٗا وَنَهَارٗا
          <span className="numberTheme"> (5) </span> فَلَمۡ يَزِدۡهُمۡ
          دُعَآءِيٓ إِلَّا فِرَارٗا
          <span className="numberTheme"> (6) </span> وَإِنِّي كُلَّمَا
          دَعَوۡتُهُمۡ لِتَغۡفِرَ لَهُمۡ جَعَلُوٓاْ أَصَٰبِعَهُمۡ فِيٓ
          ءَاذَانِهِمۡ وَٱسۡتَغۡشَوۡاْ ثِيَابَهُمۡ وَأَصَرُّواْ وَٱسۡتَكۡبَرُواْ
          ٱسۡتِكۡبَارٗا
          <span className="numberTheme"> (7) </span> ثُمَّ إِنِّي دَعَوۡتُهُمۡ
          جِهَارٗا
          <span className="numberTheme"> (8) </span> ثُمَّ إِنِّيٓ أَعۡلَنتُ
          لَهُمۡ وَأَسۡرَرۡتُ لَهُمۡ إِسۡرَارٗا
          <span className="numberTheme"> (9) </span> فَقُلۡتُ ٱسۡتَغۡفِرُواْ
          رَبَّكُمۡ إِنَّهُۥ كَانَ غَفَّارٗا
          <span className="numberTheme"> (10) </span> يُرۡسِلِ ٱلسَّمَآءَ
          عَلَيۡكُم مِّدۡرَارٗا
          <span className="numberTheme"> (11) </span>
          وَيُمۡدِدۡكُم بِأَمۡوَٰلٖ وَبَنِينَ وَيَجۡعَل لَّكُمۡ جَنَّٰتٖ
          وَيَجۡعَل لَّكُمۡ أَنۡهَٰرٗا
          <span className="numberTheme"> (12) </span> مَّا لَكُمۡ لَا تَرۡجُونَ
          لِلَّهِ وَقَارٗا
          <span className="numberTheme"> (13) </span> وَقَدۡ خَلَقَكُمۡ
          أَطۡوَارًا
          <span className="numberTheme"> (14) </span> أَلَمۡ تَرَوۡاْ كَيۡفَ
          خَلَقَ ٱللَّهُ سَبۡعَ سَمَٰوَٰتٖ طِبَاقٗا
          <span className="numberTheme"> (15) </span> وَجَعَلَ ٱلۡقَمَرَ
          فِيهِنَّ نُورٗا وَجَعَلَ ٱلشَّمۡسَ سِرَاجٗا
          <span className="numberTheme"> (16) </span> وَٱللَّهُ أَنۢبَتَكُم
          مِّنَ ٱلۡأَرۡضِ نَبَاتٗا
          <span className="numberTheme"> (17) </span> ثُمَّ يُعِيدُكُمۡ فِيهَا
          وَيُخۡرِجُكُمۡ إِخۡرَاجٗا
          <span className="numberTheme"> (18) </span> وَٱللَّهُ جَعَلَ لَكُمُ
          ٱلۡأَرۡضَ بِسَاطٗا
          <span className="numberTheme"> (19) </span>
          لِّتَسۡلُكُواْ مِنۡهَا سُبُلٗا فِجَاجٗا
          <span className="numberTheme"> (20) </span> قَالَ نُوحٞ رَّبِّ
          إِنَّهُمۡ عَصَوۡنِي وَٱتَّبَعُواْ مَن لَّمۡ يَزِدۡهُ مَالُهُۥ
          وَوَلَدُهُۥٓ إِلَّا خَسَارٗا
          <span className="numberTheme"> (21) </span> وَمَكَرُواْ مَكۡرٗا
          كُبَّارٗا
          <span className="numberTheme"> (22) </span>
          وَقَالُواْ لَا تَذَرُنَّ ءَالِهَتَكُمۡ وَلَا تَذَرُنَّ وَدّٗا وَلَا
          سُوَاعٗا وَلَا يَغُوثَ وَيَعُوقَ وَنَسۡرٗا
          <span className="numberTheme"> (23) </span> وَقَدۡ أَضَلُّواْ
          كَثِيرٗاۖ وَلَا تَزِدِ ٱلظَّٰلِمِينَ إِلَّا ضَلَٰلٗا
          <span className="numberTheme"> (24) </span> مِّمَّا خَطِيٓـَٰٔتِهِمۡ
          أُغۡرِقُواْ فَأُدۡخِلُواْ نَارٗا فَلَمۡ يَجِدُواْ لَهُم مِّن دُونِ
          ٱللَّهِ أَنصَارٗا
          <span className="numberTheme"> (25) </span> وَقَالَ نُوحٞ رَّبِّ لَا
          تَذَرۡ عَلَى ٱلۡأَرۡضِ مِنَ ٱلۡكَٰفِرِينَ دَيَّارًا
          <span className="numberTheme"> (26) </span> إِنَّكَ إِن تَذَرۡهُمۡ
          يُضِلُّواْ عِبَادَكَ وَلَا يَلِدُوٓاْ إِلَّا فَاجِرٗا كَفَّارٗا
          <span className="numberTheme"> (27) </span> رَّبِّ ٱغۡفِرۡ لِي
          وَلِوَٰلِدَيَّ وَلِمَن دَخَلَ بَيۡتِيَ مُؤۡمِنٗا وَلِلۡمُؤۡمِنِينَ
          وَٱلۡمُؤۡمِنَٰتِۖ وَلَا تَزِدِ ٱلظَّٰلِمِينَ إِلَّا تَبَارَۢا
          <span className="numberTheme"> (28) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default SeventyOne;
