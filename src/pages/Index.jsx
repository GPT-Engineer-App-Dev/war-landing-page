import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-6">The Impact of War</h1>
      <Card className="w-full max-w-2xl mb-6">
        <CardHeader>
          <CardTitle>Understanding Conflict</CardTitle>
          <CardDescription>War affects millions of lives around the world</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            War has been a part of human history for millennia, causing immense suffering, 
            loss of life, and destruction. It impacts not just combatants, but civilians, 
            economies, and the environment.
          </p>
          <p>
            In the modern era, the consequences of war are more far-reaching than ever before, 
            affecting global politics, refugee crises, and international relations.
          </p>
        </CardContent>
      </Card>
      <Card className="w-full max-w-2xl mb-6">
        <CardHeader>
          <CardTitle>The Importance of Peace</CardTitle>
          <CardDescription>Working towards a more peaceful world</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Peace is not merely the absence of war, but a state of harmony, security, and 
            well-being. It requires ongoing effort, diplomacy, and cooperation between nations.
          </p>
          <p>
            Promoting peace involves addressing root causes of conflict, fostering 
            understanding between cultures, and supporting international institutions 
            dedicated to maintaining global stability.
          </p>
        </CardContent>
      </Card>
      <Button variant="outline" className="mt-4">
        Learn More About Peace Initiatives
      </Button>
    </div>
  );
};

export default Index;