import Head from 'next/head';
import Script from 'next/script';
import { CollectionSlider } from '../ui/sections/CollectionsSlider';
import { FeaturedProduct } from '../ui/sections/FeaturedProduct';
import { FeaturedProducts } from '../ui/sections/FeaturedProducts';

import { MainFooter } from '../ui/sections/MainFooter';
import { MainHeader } from '../ui/sections/MainHeader';
import { RenderProductsMin } from '../ui/sections/RenderProductsMin';
import { AppTemplate } from '../ui/templates/AppTemplate';

export default function Home() {
  return (
    <AppTemplate>
      <CollectionSlider />
      <FeaturedProducts/>
      <FeaturedProduct/>
      <RenderProductsMin/>
    </AppTemplate>
  )
}
