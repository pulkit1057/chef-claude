#include<bits/stdc++.h>

using namespace std;

float dist(float &x1,float &y1,float &x2,float &y2)
{
    return sqrt(pow(x1-x2,2)+pow(y1-y2,2));
}

vector<pair<float,float>> k_means_clustering(vector<pair<float,float>> &points,int k)
{
    vector<pair<float,float>> centroids;
    int n = points.size();

    for(int i=0;i<k;i++)
    {
        centroids.push_back({i,i});
    }

    vector<pair<float,int>> dis(n,{INT_MAX,-1});

    for(int i=0;i<points.size();i++)
    {
        for(int j=0;j<k;j++)
        {
            float d = dist(points[i].first,points[i].second,centroids[j].first,centroids[j].first);

            if(d < dis[i].first)
            {
                dis[i].first = d;
                dis[i].second = j;
            }
        }
    }

}

int main()
{
    return 0;
}