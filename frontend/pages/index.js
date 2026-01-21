/**
 * @name Hotel Room Booking System
 * @author Md. Samiur Rahman (Mukul)
 * @description Hotel Room Booking and Management System Software
 * @version v0.0.1
 */

import React from "react";
import Link from "next/link";
import axios from "axios";
import getConfig from "next/config";
import { Empty, Result, Skeleton } from "antd";

import MainLayout from "../components/layout";
import Hero from "../components/home/Hero";
import Banner from "../components/home/Banner";
import Services from "../components/home/Services";
import FeaturedRooms from "../components/home/FeaturedRooms";

const { publicRuntimeConfig } = getConfig();

function Home(props) {
  const { featuredRooms, error } = props;

  return (
    <MainLayout title="Beach Resort ― Home">
      {/* HERO SECTION */}
      <Hero>
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link href="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>

      {/* SERVICES */}
      <Services />

      {/* FEATURED ROOMS */}
      <Skeleton
        loading={!featuredRooms && !error}
        paragraph={{ rows: 5 }}
        active
      >
        {featuredRooms?.data?.rows?.length === 0 ? (
          <Empty
            className="mt-10"
            description={<span>Sorry! Any data was not found.</span>}
          />
        ) : error ? (
          <Result
            status="error"
            title="Failed to fetch"
            subTitle={
              error?.message ||
              "Sorry! Something went wrong. App server error"
            }
          />
        ) : (
          <FeaturedRooms
            featuredRoom={featuredRooms?.data?.rows || []}
          />
        )}
      </Skeleton>
    </MainLayout>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axios.get(
      `${publicRuntimeConfig.API_BASE_URL}/api/v1/featured-rooms-list`
    );

    return {
      props: {
        featuredRooms: response?.data?.result || null,
        error: null
      }
    };
  } catch (err) {
    return {
      props: {
        featuredRooms: null,
        error: err?.response?.data || {
          message: "Failed to connect to backend server"
        }
      }
    };
  }
}

export default Home;
